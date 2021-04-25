/*
 * Generated by com.medplum.generator.Generator
 * Do not edit manually.
 */

package com.medplum.fhir.types;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

public class ImagingStudy extends FhirResource {
    public static final String RESOURCE_TYPE = "ImagingStudy";
    public static final String PROPERTY_RESOURCE_TYPE = "resourceType";
    public static final String PROPERTY_ID = "id";
    public static final String PROPERTY_META = "meta";
    public static final String PROPERTY_IMPLICIT_RULES = "implicitRules";
    public static final String PROPERTY_LANGUAGE = "language";
    public static final String PROPERTY_TEXT = "text";
    public static final String PROPERTY_CONTAINED = "contained";
    public static final String PROPERTY_MODIFIER_EXTENSION = "modifierExtension";
    public static final String PROPERTY_IDENTIFIER = "identifier";
    public static final String PROPERTY_STATUS = "status";
    public static final String PROPERTY_MODALITY = "modality";
    public static final String PROPERTY_SUBJECT = "subject";
    public static final String PROPERTY_ENCOUNTER = "encounter";
    public static final String PROPERTY_STARTED = "started";
    public static final String PROPERTY_BASED_ON = "basedOn";
    public static final String PROPERTY_REFERRER = "referrer";
    public static final String PROPERTY_INTERPRETER = "interpreter";
    public static final String PROPERTY_ENDPOINT = "endpoint";
    public static final String PROPERTY_NUMBER_OF_SERIES = "numberOfSeries";
    public static final String PROPERTY_NUMBER_OF_INSTANCES = "numberOfInstances";
    public static final String PROPERTY_PROCEDURE_REFERENCE = "procedureReference";
    public static final String PROPERTY_PROCEDURE_CODE = "procedureCode";
    public static final String PROPERTY_LOCATION = "location";
    public static final String PROPERTY_REASON_CODE = "reasonCode";
    public static final String PROPERTY_REASON_REFERENCE = "reasonReference";
    public static final String PROPERTY_NOTE = "note";
    public static final String PROPERTY_DESCRIPTION = "description";
    public static final String PROPERTY_SERIES = "series";

    public static Builder create() {
        return new Builder();
    }

    public static Builder create(final JsonObject data) {
        return new Builder(data);
    }

    public ImagingStudy(final JsonObject data) {
        super(data);
    }

    /**
     * A reference to a set of rules that were followed when the resource was
     * constructed, and which must be understood when processing the content.
     * Often, this is a reference to an implementation guide that defines the
     * special rules along with other profiles etc.
     */
    public String implicitRules() {
        return getString(PROPERTY_IMPLICIT_RULES);
    }

    /**
     * The base language in which the resource is written.
     */
    public String language() {
        return getString(PROPERTY_LANGUAGE);
    }

    /**
     * A human-readable narrative that contains a summary of the resource and
     * can be used to represent the content of the resource to a human. The
     * narrative need not encode all the structured data, but is required to
     * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
     * just read the narrative. Resource definitions may define what content
     * should be represented in the narrative to ensure clinical safety.
     */
    public Narrative text() {
        return getObject(Narrative.class, PROPERTY_TEXT);
    }

    /**
     * These resources do not have an independent existence apart from the
     * resource that contains them - they cannot be identified independently,
     * and nor can they have their own independent transaction scope.
     */
    public java.util.List<FhirResource> contained() {
        return getList(FhirResource.class, PROPERTY_CONTAINED);
    }

    /**
     * May be used to represent additional information that is not part of
     * the basic definition of the resource and that modifies the
     * understanding of the element that contains it and/or the understanding
     * of the containing element's descendants. Usually modifier elements
     * provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the
     * definition and use of extensions. Though any implementer is allowed to
     * define an extension, there is a set of requirements that SHALL be met
     * as part of the definition of the extension. Applications processing a
     * resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on
     * Resource or DomainResource (including cannot change the meaning of
     * modifierExtension itself).
     */
    public java.util.List<Extension> modifierExtension() {
        return getList(Extension.class, PROPERTY_MODIFIER_EXTENSION);
    }

    /**
     * Identifiers for the ImagingStudy such as DICOM Study Instance UID, and
     * Accession Number.
     */
    public java.util.List<Identifier> identifier() {
        return getList(Identifier.class, PROPERTY_IDENTIFIER);
    }

    /**
     * The current state of the ImagingStudy.
     */
    public String status() {
        return getString(PROPERTY_STATUS);
    }

    /**
     * A list of all the series.modality values that are actual acquisition
     * modalities, i.e. those in the DICOM Context Group 29 (value set OID
     * 1.2.840.10008.6.1.19).
     */
    public java.util.List<Coding> modality() {
        return getList(Coding.class, PROPERTY_MODALITY);
    }

    /**
     * The subject, typically a patient, of the imaging study.
     */
    public Reference subject() {
        return getObject(Reference.class, PROPERTY_SUBJECT);
    }

    /**
     * The healthcare event (e.g. a patient and healthcare provider
     * interaction) during which this ImagingStudy is made.
     */
    public Reference encounter() {
        return getObject(Reference.class, PROPERTY_ENCOUNTER);
    }

    /**
     * Date and time the study started.
     */
    public java.time.Instant started() {
        return java.time.Instant.parse(data.getString(PROPERTY_STARTED));
    }

    /**
     * A list of the diagnostic requests that resulted in this imaging study
     * being performed.
     */
    public java.util.List<Reference> basedOn() {
        return getList(Reference.class, PROPERTY_BASED_ON);
    }

    /**
     * The requesting/referring physician.
     */
    public Reference referrer() {
        return getObject(Reference.class, PROPERTY_REFERRER);
    }

    /**
     * Who read the study and interpreted the images or other content.
     */
    public java.util.List<Reference> interpreter() {
        return getList(Reference.class, PROPERTY_INTERPRETER);
    }

    /**
     * The network service providing access (e.g., query, view, or retrieval)
     * for the study. See implementation notes for information about using
     * DICOM endpoints. A study-level endpoint applies to each series in the
     * study, unless overridden by a series-level endpoint with the same
     * Endpoint.connectionType.
     */
    public java.util.List<Reference> endpoint() {
        return getList(Reference.class, PROPERTY_ENDPOINT);
    }

    /**
     * Number of Series in the Study. This value given may be larger than the
     * number of series elements this Resource contains due to resource
     * availability, security, or other factors. This element should be
     * present if any series elements are present.
     */
    public Integer numberOfSeries() {
        return data.getInt(PROPERTY_NUMBER_OF_SERIES);
    }

    /**
     * Number of SOP Instances in Study. This value given may be larger than
     * the number of instance elements this resource contains due to resource
     * availability, security, or other factors. This element should be
     * present if any instance elements are present.
     */
    public Integer numberOfInstances() {
        return data.getInt(PROPERTY_NUMBER_OF_INSTANCES);
    }

    /**
     * The procedure which this ImagingStudy was part of.
     */
    public Reference procedureReference() {
        return getObject(Reference.class, PROPERTY_PROCEDURE_REFERENCE);
    }

    /**
     * The code for the performed procedure type.
     */
    public java.util.List<CodeableConcept> procedureCode() {
        return getList(CodeableConcept.class, PROPERTY_PROCEDURE_CODE);
    }

    /**
     * The principal physical location where the ImagingStudy was performed.
     */
    public Reference location() {
        return getObject(Reference.class, PROPERTY_LOCATION);
    }

    /**
     * Description of clinical condition indicating why the ImagingStudy was
     * requested.
     */
    public java.util.List<CodeableConcept> reasonCode() {
        return getList(CodeableConcept.class, PROPERTY_REASON_CODE);
    }

    /**
     * Indicates another resource whose existence justifies this Study.
     */
    public java.util.List<Reference> reasonReference() {
        return getList(Reference.class, PROPERTY_REASON_REFERENCE);
    }

    /**
     * Per the recommended DICOM mapping, this element is derived from the
     * Study Description attribute (0008,1030). Observations or findings
     * about the imaging study should be recorded in another resource, e.g.
     * Observation, and not in this element.
     */
    public java.util.List<Annotation> note() {
        return getList(Annotation.class, PROPERTY_NOTE);
    }

    /**
     * The Imaging Manager description of the study. Institution-generated
     * description or classification of the Study (component) performed.
     */
    public String description() {
        return getString(PROPERTY_DESCRIPTION);
    }

    /**
     * Each study has one or more series of images or other content.
     */
    public java.util.List<ImagingStudySeries> series() {
        return getList(ImagingStudySeries.class, PROPERTY_SERIES);
    }

    public static class Builder extends FhirResource.Builder {

        private Builder() {
            super(RESOURCE_TYPE);
        }

        private Builder(final JsonObject data) {
            super(RESOURCE_TYPE, data);
        }

        public Builder resourceType(final String resourceType) {
            b.add(PROPERTY_RESOURCE_TYPE, resourceType);
            return this;
        }

        public Builder id(final String id) {
            b.add(PROPERTY_ID, id);
            return this;
        }

        public Builder meta(final Meta meta) {
            b.add(PROPERTY_META, meta);
            return this;
        }

        public Builder implicitRules(final String implicitRules) {
            b.add(PROPERTY_IMPLICIT_RULES, implicitRules);
            return this;
        }

        public Builder language(final String language) {
            b.add(PROPERTY_LANGUAGE, language);
            return this;
        }

        public Builder text(final Narrative text) {
            b.add(PROPERTY_TEXT, text);
            return this;
        }

        public Builder contained(final java.util.List<FhirResource> contained) {
            b.add(PROPERTY_CONTAINED, FhirObject.toArray(contained));
            return this;
        }

        public Builder modifierExtension(final java.util.List<Extension> modifierExtension) {
            b.add(PROPERTY_MODIFIER_EXTENSION, FhirObject.toArray(modifierExtension));
            return this;
        }

        public Builder identifier(final java.util.List<Identifier> identifier) {
            b.add(PROPERTY_IDENTIFIER, FhirObject.toArray(identifier));
            return this;
        }

        public Builder status(final String status) {
            b.add(PROPERTY_STATUS, status);
            return this;
        }

        public Builder modality(final java.util.List<Coding> modality) {
            b.add(PROPERTY_MODALITY, FhirObject.toArray(modality));
            return this;
        }

        public Builder subject(final Reference subject) {
            b.add(PROPERTY_SUBJECT, subject);
            return this;
        }

        public Builder encounter(final Reference encounter) {
            b.add(PROPERTY_ENCOUNTER, encounter);
            return this;
        }

        public Builder started(final java.time.Instant started) {
            b.add(PROPERTY_STARTED, started.toString());
            return this;
        }

        public Builder basedOn(final java.util.List<Reference> basedOn) {
            b.add(PROPERTY_BASED_ON, FhirObject.toArray(basedOn));
            return this;
        }

        public Builder referrer(final Reference referrer) {
            b.add(PROPERTY_REFERRER, referrer);
            return this;
        }

        public Builder interpreter(final java.util.List<Reference> interpreter) {
            b.add(PROPERTY_INTERPRETER, FhirObject.toArray(interpreter));
            return this;
        }

        public Builder endpoint(final java.util.List<Reference> endpoint) {
            b.add(PROPERTY_ENDPOINT, FhirObject.toArray(endpoint));
            return this;
        }

        public Builder numberOfSeries(final Integer numberOfSeries) {
            b.add(PROPERTY_NUMBER_OF_SERIES, numberOfSeries);
            return this;
        }

        public Builder numberOfInstances(final Integer numberOfInstances) {
            b.add(PROPERTY_NUMBER_OF_INSTANCES, numberOfInstances);
            return this;
        }

        public Builder procedureReference(final Reference procedureReference) {
            b.add(PROPERTY_PROCEDURE_REFERENCE, procedureReference);
            return this;
        }

        public Builder procedureCode(final java.util.List<CodeableConcept> procedureCode) {
            b.add(PROPERTY_PROCEDURE_CODE, FhirObject.toArray(procedureCode));
            return this;
        }

        public Builder location(final Reference location) {
            b.add(PROPERTY_LOCATION, location);
            return this;
        }

        public Builder reasonCode(final java.util.List<CodeableConcept> reasonCode) {
            b.add(PROPERTY_REASON_CODE, FhirObject.toArray(reasonCode));
            return this;
        }

        public Builder reasonReference(final java.util.List<Reference> reasonReference) {
            b.add(PROPERTY_REASON_REFERENCE, FhirObject.toArray(reasonReference));
            return this;
        }

        public Builder note(final java.util.List<Annotation> note) {
            b.add(PROPERTY_NOTE, FhirObject.toArray(note));
            return this;
        }

        public Builder description(final String description) {
            b.add(PROPERTY_DESCRIPTION, description);
            return this;
        }

        public Builder series(final java.util.List<ImagingStudySeries> series) {
            b.add(PROPERTY_SERIES, FhirObject.toArray(series));
            return this;
        }

        public ImagingStudy build() {
            return new ImagingStudy(b.build());
        }
    }

    public static class ImagingStudyInstance extends FhirObject {
        public static final String RESOURCE_TYPE = "ImagingStudyInstance";
        public static final String PROPERTY_ID = "id";
        public static final String PROPERTY_MODIFIER_EXTENSION = "modifierExtension";
        public static final String PROPERTY_UID = "uid";
        public static final String PROPERTY_SOP_CLASS = "sopClass";
        public static final String PROPERTY_NUMBER = "number";
        public static final String PROPERTY_TITLE = "title";

        public static Builder create() {
            return new Builder();
        }

        public static Builder create(final JsonObject data) {
            return new Builder(data);
        }

        public ImagingStudyInstance(final JsonObject data) {
            super(data);
        }

        /**
         * Unique id for the element within a resource (for internal references).
         * This may be any string value that does not contain spaces.
         */
        public String id() {
            return getString(PROPERTY_ID);
        }

        /**
         * May be used to represent additional information that is not part of
         * the basic definition of the element and that modifies the
         * understanding of the element in which it is contained and/or the
         * understanding of the containing element's descendants. Usually
         * modifier elements provide negation or qualification. To make the use
         * of extensions safe and manageable, there is a strict set of governance
         * applied to the definition and use of extensions. Though any
         * implementer can define an extension, there is a set of requirements
         * that SHALL be met as part of the definition of the extension.
         * Applications processing a resource are required to check for modifier
         * extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on
         * Resource or DomainResource (including cannot change the meaning of
         * modifierExtension itself).
         */
        public java.util.List<Extension> modifierExtension() {
            return getList(Extension.class, PROPERTY_MODIFIER_EXTENSION);
        }

        /**
         * The DICOM SOP Instance UID for this image or other DICOM content.
         */
        public String uid() {
            return getString(PROPERTY_UID);
        }

        /**
         * DICOM instance  type.
         */
        public Coding sopClass() {
            return getObject(Coding.class, PROPERTY_SOP_CLASS);
        }

        /**
         * The number of instance in the series.
         */
        public Integer number() {
            return data.getInt(PROPERTY_NUMBER);
        }

        /**
         * The description of the instance.
         */
        public String title() {
            return getString(PROPERTY_TITLE);
        }

        public static class Builder {
            private final JsonObjectBuilder b;

            private Builder() {
                b = Json.createObjectBuilder();
            }

            private Builder(final JsonObject data) {
                b = Json.createObjectBuilder(data);
            }

            public Builder id(final String id) {
                b.add(PROPERTY_ID, id);
                return this;
            }

            public Builder modifierExtension(final java.util.List<Extension> modifierExtension) {
                b.add(PROPERTY_MODIFIER_EXTENSION, FhirObject.toArray(modifierExtension));
                return this;
            }

            public Builder uid(final String uid) {
                b.add(PROPERTY_UID, uid);
                return this;
            }

            public Builder sopClass(final Coding sopClass) {
                b.add(PROPERTY_SOP_CLASS, sopClass);
                return this;
            }

            public Builder number(final Integer number) {
                b.add(PROPERTY_NUMBER, number);
                return this;
            }

            public Builder title(final String title) {
                b.add(PROPERTY_TITLE, title);
                return this;
            }

            public ImagingStudyInstance build() {
                return new ImagingStudyInstance(b.build());
            }
        }
    }

    public static class ImagingStudyPerformer extends FhirObject {
        public static final String RESOURCE_TYPE = "ImagingStudyPerformer";
        public static final String PROPERTY_ID = "id";
        public static final String PROPERTY_MODIFIER_EXTENSION = "modifierExtension";
        public static final String PROPERTY_FUNCTION = "function";
        public static final String PROPERTY_ACTOR = "actor";

        public static Builder create() {
            return new Builder();
        }

        public static Builder create(final JsonObject data) {
            return new Builder(data);
        }

        public ImagingStudyPerformer(final JsonObject data) {
            super(data);
        }

        /**
         * Unique id for the element within a resource (for internal references).
         * This may be any string value that does not contain spaces.
         */
        public String id() {
            return getString(PROPERTY_ID);
        }

        /**
         * May be used to represent additional information that is not part of
         * the basic definition of the element and that modifies the
         * understanding of the element in which it is contained and/or the
         * understanding of the containing element's descendants. Usually
         * modifier elements provide negation or qualification. To make the use
         * of extensions safe and manageable, there is a strict set of governance
         * applied to the definition and use of extensions. Though any
         * implementer can define an extension, there is a set of requirements
         * that SHALL be met as part of the definition of the extension.
         * Applications processing a resource are required to check for modifier
         * extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on
         * Resource or DomainResource (including cannot change the meaning of
         * modifierExtension itself).
         */
        public java.util.List<Extension> modifierExtension() {
            return getList(Extension.class, PROPERTY_MODIFIER_EXTENSION);
        }

        /**
         * Distinguishes the type of involvement of the performer in the series.
         */
        public CodeableConcept function() {
            return getObject(CodeableConcept.class, PROPERTY_FUNCTION);
        }

        /**
         * Indicates who or what performed the series.
         */
        public Reference actor() {
            return getObject(Reference.class, PROPERTY_ACTOR);
        }

        public static class Builder {
            private final JsonObjectBuilder b;

            private Builder() {
                b = Json.createObjectBuilder();
            }

            private Builder(final JsonObject data) {
                b = Json.createObjectBuilder(data);
            }

            public Builder id(final String id) {
                b.add(PROPERTY_ID, id);
                return this;
            }

            public Builder modifierExtension(final java.util.List<Extension> modifierExtension) {
                b.add(PROPERTY_MODIFIER_EXTENSION, FhirObject.toArray(modifierExtension));
                return this;
            }

            public Builder function(final CodeableConcept function) {
                b.add(PROPERTY_FUNCTION, function);
                return this;
            }

            public Builder actor(final Reference actor) {
                b.add(PROPERTY_ACTOR, actor);
                return this;
            }

            public ImagingStudyPerformer build() {
                return new ImagingStudyPerformer(b.build());
            }
        }
    }

    public static class ImagingStudySeries extends FhirObject {
        public static final String RESOURCE_TYPE = "ImagingStudySeries";
        public static final String PROPERTY_ID = "id";
        public static final String PROPERTY_MODIFIER_EXTENSION = "modifierExtension";
        public static final String PROPERTY_UID = "uid";
        public static final String PROPERTY_NUMBER = "number";
        public static final String PROPERTY_MODALITY = "modality";
        public static final String PROPERTY_DESCRIPTION = "description";
        public static final String PROPERTY_NUMBER_OF_INSTANCES = "numberOfInstances";
        public static final String PROPERTY_ENDPOINT = "endpoint";
        public static final String PROPERTY_BODY_SITE = "bodySite";
        public static final String PROPERTY_LATERALITY = "laterality";
        public static final String PROPERTY_SPECIMEN = "specimen";
        public static final String PROPERTY_STARTED = "started";
        public static final String PROPERTY_PERFORMER = "performer";
        public static final String PROPERTY_INSTANCE = "instance";

        public static Builder create() {
            return new Builder();
        }

        public static Builder create(final JsonObject data) {
            return new Builder(data);
        }

        public ImagingStudySeries(final JsonObject data) {
            super(data);
        }

        /**
         * Unique id for the element within a resource (for internal references).
         * This may be any string value that does not contain spaces.
         */
        public String id() {
            return getString(PROPERTY_ID);
        }

        /**
         * May be used to represent additional information that is not part of
         * the basic definition of the element and that modifies the
         * understanding of the element in which it is contained and/or the
         * understanding of the containing element's descendants. Usually
         * modifier elements provide negation or qualification. To make the use
         * of extensions safe and manageable, there is a strict set of governance
         * applied to the definition and use of extensions. Though any
         * implementer can define an extension, there is a set of requirements
         * that SHALL be met as part of the definition of the extension.
         * Applications processing a resource are required to check for modifier
         * extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on
         * Resource or DomainResource (including cannot change the meaning of
         * modifierExtension itself).
         */
        public java.util.List<Extension> modifierExtension() {
            return getList(Extension.class, PROPERTY_MODIFIER_EXTENSION);
        }

        /**
         * The DICOM Series Instance UID for the series.
         */
        public String uid() {
            return getString(PROPERTY_UID);
        }

        /**
         * The numeric identifier of this series in the study.
         */
        public Integer number() {
            return data.getInt(PROPERTY_NUMBER);
        }

        /**
         * The modality of this series sequence.
         */
        public Coding modality() {
            return getObject(Coding.class, PROPERTY_MODALITY);
        }

        /**
         * A description of the series.
         */
        public String description() {
            return getString(PROPERTY_DESCRIPTION);
        }

        /**
         * Number of SOP Instances in the Study. The value given may be larger
         * than the number of instance elements this resource contains due to
         * resource availability, security, or other factors. This element should
         * be present if any instance elements are present.
         */
        public Integer numberOfInstances() {
            return data.getInt(PROPERTY_NUMBER_OF_INSTANCES);
        }

        /**
         * The network service providing access (e.g., query, view, or retrieval)
         * for this series. See implementation notes for information about using
         * DICOM endpoints. A series-level endpoint, if present, has precedence
         * over a study-level endpoint with the same Endpoint.connectionType.
         */
        public java.util.List<Reference> endpoint() {
            return getList(Reference.class, PROPERTY_ENDPOINT);
        }

        /**
         * The anatomic structures examined. See DICOM Part 16 Annex L
         * (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html)
         * for DICOM to SNOMED-CT mappings. The bodySite may indicate the
         * laterality of body part imaged; if so, it shall be consistent with any
         * content of ImagingStudy.series.laterality.
         */
        public Coding bodySite() {
            return getObject(Coding.class, PROPERTY_BODY_SITE);
        }

        /**
         * The laterality of the (possibly paired) anatomic structures examined.
         * E.g., the left knee, both lungs, or unpaired abdomen. If present,
         * shall be consistent with any laterality information indicated in
         * ImagingStudy.series.bodySite.
         */
        public Coding laterality() {
            return getObject(Coding.class, PROPERTY_LATERALITY);
        }

        /**
         * The specimen imaged, e.g., for whole slide imaging of a biopsy.
         */
        public java.util.List<Reference> specimen() {
            return getList(Reference.class, PROPERTY_SPECIMEN);
        }

        /**
         * The date and time the series was started.
         */
        public java.time.Instant started() {
            return java.time.Instant.parse(data.getString(PROPERTY_STARTED));
        }

        /**
         * Indicates who or what performed the series and how they were involved.
         */
        public java.util.List<ImagingStudyPerformer> performer() {
            return getList(ImagingStudyPerformer.class, PROPERTY_PERFORMER);
        }

        /**
         * A single SOP instance within the series, e.g. an image, or
         * presentation state.
         */
        public java.util.List<ImagingStudyInstance> instance() {
            return getList(ImagingStudyInstance.class, PROPERTY_INSTANCE);
        }

        public static class Builder {
            private final JsonObjectBuilder b;

            private Builder() {
                b = Json.createObjectBuilder();
            }

            private Builder(final JsonObject data) {
                b = Json.createObjectBuilder(data);
            }

            public Builder id(final String id) {
                b.add(PROPERTY_ID, id);
                return this;
            }

            public Builder modifierExtension(final java.util.List<Extension> modifierExtension) {
                b.add(PROPERTY_MODIFIER_EXTENSION, FhirObject.toArray(modifierExtension));
                return this;
            }

            public Builder uid(final String uid) {
                b.add(PROPERTY_UID, uid);
                return this;
            }

            public Builder number(final Integer number) {
                b.add(PROPERTY_NUMBER, number);
                return this;
            }

            public Builder modality(final Coding modality) {
                b.add(PROPERTY_MODALITY, modality);
                return this;
            }

            public Builder description(final String description) {
                b.add(PROPERTY_DESCRIPTION, description);
                return this;
            }

            public Builder numberOfInstances(final Integer numberOfInstances) {
                b.add(PROPERTY_NUMBER_OF_INSTANCES, numberOfInstances);
                return this;
            }

            public Builder endpoint(final java.util.List<Reference> endpoint) {
                b.add(PROPERTY_ENDPOINT, FhirObject.toArray(endpoint));
                return this;
            }

            public Builder bodySite(final Coding bodySite) {
                b.add(PROPERTY_BODY_SITE, bodySite);
                return this;
            }

            public Builder laterality(final Coding laterality) {
                b.add(PROPERTY_LATERALITY, laterality);
                return this;
            }

            public Builder specimen(final java.util.List<Reference> specimen) {
                b.add(PROPERTY_SPECIMEN, FhirObject.toArray(specimen));
                return this;
            }

            public Builder started(final java.time.Instant started) {
                b.add(PROPERTY_STARTED, started.toString());
                return this;
            }

            public Builder performer(final java.util.List<ImagingStudyPerformer> performer) {
                b.add(PROPERTY_PERFORMER, FhirObject.toArray(performer));
                return this;
            }

            public Builder instance(final java.util.List<ImagingStudyInstance> instance) {
                b.add(PROPERTY_INSTANCE, FhirObject.toArray(instance));
                return this;
            }

            public ImagingStudySeries build() {
                return new ImagingStudySeries(b.build());
            }
        }
    }
}
