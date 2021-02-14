// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AspectRatio = {
  "FOURTOTHREE": "FOURTOTHREE",
  "SIXTEENTONINE": "SIXTEENTONINE"
};

const UsageType = {
  "EDITORIAL": "EDITORIAL",
  "CREATIVE": "CREATIVE",
  "PUBLICDOMAIN": "PUBLICDOMAIN",
  "RIGHTSREADY": "RIGHTSREADY"
};

const Format = {
  "EIGHTMM": "EIGHTMM",
  "SUPEREIGHT": "SUPEREIGHT",
  "SIXTEENMM": "SIXTEENMM",
  "PATHE": "PATHE",
  "THIRTYFIVEMM": "THIRTYFIVEMM",
  "OTHER": "OTHER"
};

const RelationshipToCopyrightHolder = {
  "PRIMARYCONTACT": "PRIMARYCONTACT",
  "CHILD": "CHILD",
  "RELATIVE": "RELATIVE",
  "FRIEND": "FRIEND",
  "NORELATION": "NORELATION",
  "SELF": "SELF"
};

const CopyrightHolderStatus = {
  "ALIVE": "ALIVE",
  "DECEASED": "DECEASED"
};

const { Shot, Reel, Person, Collection } = initSchema(schema);

export {
  Shot,
  Reel,
  Person,
  Collection,
  AspectRatio,
  UsageType,
  Format,
  RelationshipToCopyrightHolder,
  CopyrightHolderStatus
};