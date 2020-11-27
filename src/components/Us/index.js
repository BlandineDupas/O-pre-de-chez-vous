import React from 'react';

// Components
import Page from 'src/components/Parts/Page';
import One from './One';

// STYLES
import './styles.scss';

// PICTURES
import maureen from './maureen.jpg';
import raynaud from './raynaud.jpg';
import remy from './remy.jpg';
import thomas from './thomas.jpeg';
import blandine from './blandine.jpg';
import image from './profilus.png';

// Datas
const devs = [{
  name: 'Raphaël Raynaud',
  role: 'Product Owner',
  spe: 'React',
  img: raynaud,
},
{
  name: 'Maureen Palud',
  role: 'Scrum Master',
  spe: 'React',
  img: maureen,
},
{
  name: 'Blandine Dupas',
  role: 'Lead dev Front',
  spe: 'React',
  img: blandine,
},
{
  name: 'Rémy Manchon',
  role: 'Lead dev Back',
  spe: 'Symfony',
  img: remy,
},
{
  name: 'Thomas Dziurdzi',
  role: 'Git Master',
  spe: 'Symfony',
  img: thomas,
},
];

const Us = () => (
  <Page title="Qui sommes nous ?">
    <div className="us">
      <div className="us__group"> {
        devs.map((one) => (
          <One
            key={one.name}
            name={one.name}
            role={one.role}
            spe={one.spe}
            img={one.img}
          />
        ))
    }
      </div>
    </div>
  </Page>

);

export default Us;
