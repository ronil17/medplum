import { Button, TextInput, Title, Stack, PasswordInput, MultiSelect } from '@mantine/core';
import { useMedplum, Document } from '@medplum/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Organization, AccessPolicy } from '@medplum/fhirtypes';

interface NewClinicianForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  organizations: string[];
}

export function NewClinicianPage(): JSX.Element {
  const medplum = useMedplum();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<NewClinicianForm>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organizations: [],
  });
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchOrgs = async (): Promise<void> => {
        try {
            const orgs = await medplum.search('Organization', {});
            setOrganizations(orgs.entry?.map(e => e.resource as Organization) ?? []);
        } catch (error) {
            console.error('Error fetching organizations:', error);
        }
    };
    fetchOrgs().catch((error) => {
      console.error('Error fetching organizations:', error);
    });
}, [medplum]); 


  const handleCreateClinician = async (): Promise<void> => {
    if (!formData.email || !formData.password || !formData.firstName || !formData.lastName || formData.organizations.length === 0) {
      return;
    }

    setLoading(true);
    try {
      // First get the access policy
      const policySearch = await medplum.search('AccessPolicy', {
        name: 'Managed Service Organization Access Policy'
      });
      const policy = policySearch.entry?.[0]?.resource as AccessPolicy;
      
      if (!policy) {
        throw new Error('Access policy not found');
      }

      // Create the access array for each selected organization
      const access = formData.organizations.map(orgId => ({
        policy: { reference: `AccessPolicy/${policy.id}` },
        parameter: [{
          name: 'organization',
          valueReference: { reference: `Organization/${orgId}` }
        }]
      }));

      // Create the practitioner with project invitation
      const result = await medplum.post('admin/projects/:projectId/invite', {
        resourceType: 'Practitioner',
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        sendEmail: false,
        membership: {
          access
        }
      });

      navigate(`/${result.profile?.reference}`);
    } catch (error) {
      console.error('Error creating clinician:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Document>
      <Title order={2} mb="xl">Create New Clinician</Title>
      <Stack gap="lg">
        <TextInput
          label="First Name"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
          required
        />
        
        <TextInput
          label="Last Name"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
          required
        />

        <TextInput
          label="Email"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          required
        />

        <MultiSelect
          label="Organizations"
          placeholder="Select organizations"
          data={organizations.map(org => ({
            value: org.id as string,
            label: org.name as string
          }))}
          value={formData.organizations}
          onChange={(values) => setFormData(prev => ({ ...prev, organizations: values }))}
          
        />
        
        <Button 
          onClick={handleCreateClinician}
          loading={loading}
          disabled={!formData.email || !formData.password || !formData.firstName || 
                   !formData.lastName || formData.organizations.length === 0}
        >
          Create Clinician
        </Button>
      </Stack>
    </Document>
  );
} 