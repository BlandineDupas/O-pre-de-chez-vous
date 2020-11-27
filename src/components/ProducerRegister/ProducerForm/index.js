// == Import npm
import React from 'react';

import RegisterField from 'src/components/Register/RegisterField';
import InputField from 'src/containers/InputField';

const ProducerForm = () => (
<div>
  <RegisterField label="Entreprise">
    <InputField
      type="text"
      name="companyName"
      id="companyName"
      placeholder="Nom de l'entreprise"
    />
    <InputField
      type="text"
      name="siretNumber"
      id="siretNumber"
      placeholder="Numéro Siret"
    />
    <InputField
      type="website"
      name="website"
      id="website"
      placeholder="Votre site web"
    />
  </RegisterField>

  <RegisterField label="Adresse">
    <InputField
      type="text"
      name="streetNumberPro"
      id="streetNumberPro"
      placeholder="Numéro"
    />
    <InputField
      type="text"
      name="streetNamePro"
      id="streetNamePro"
      placeholder="Nom de la voie"
    />
    <InputField
      type="text"
      name="zipCodePro"
      id="zipCodePro"
      placeholder="Code postal"
    />
    <InputField
      type="text"
      name="cityPro"
      id="cityPro"
      placeholder="Ville"
    />
    <InputField
      type="text"
      name="countryPro"
      id="countryPro"
      placeholder="Pays"
    />
  </RegisterField>

  <RegisterField label="Coordonnées">
    <InputField
      type="email"
      name="emailPro"
      id="emailPro"
      placeholder="Votre adresse email professionnelle"
    />
    <InputField
      type="tel"
      name="telPro"
      id="telPro"
      placeholder="Votre numéro de téléphone professionnel"
    />
  </RegisterField>
</div>
);

// == Export
export default ProducerForm;
