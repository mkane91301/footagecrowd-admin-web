import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AspectRatio {
  FOURTOTHREE = "FOURTOTHREE",
  SIXTEENTONINE = "SIXTEENTONINE"
}

export enum UsageType {
  EDITORIAL = "EDITORIAL",
  CREATIVE = "CREATIVE",
  PUBLICDOMAIN = "PUBLICDOMAIN",
  RIGHTSREADY = "RIGHTSREADY"
}

export enum Format {
  EIGHTMM = "EIGHTMM",
  SUPEREIGHT = "SUPEREIGHT",
  SIXTEENMM = "SIXTEENMM",
  PATHE = "PATHE",
  THIRTYFIVEMM = "THIRTYFIVEMM",
  OTHER = "OTHER"
}

export enum RelationshipToCopyrightHolder {
  PRIMARYCONTACT = "PRIMARYCONTACT",
  CHILD = "CHILD",
  RELATIVE = "RELATIVE",
  FRIEND = "FRIEND",
  NORELATION = "NORELATION",
  SELF = "SELF"
}

export enum CopyrightHolderStatus {
  ALIVE = "ALIVE",
  DECEASED = "DECEASED"
}



export declare class Shot {
  readonly id: string;
  readonly reelID: string;
  readonly Title: string;
  readonly Description: string;
  readonly DateCreated?: string;
  readonly City?: string;
  readonly State?: string;
  readonly Country?: string;
  readonly Keywords?: (string | null)[];
  readonly Color: boolean;
  readonly UsageTypes?: (UsageType | null)[] | keyof typeof UsageType;
  readonly AspectRatio?: AspectRatio | keyof typeof AspectRatio;
  readonly Notes?: string;
  readonly GPS?: string;
  constructor(init: ModelInit<Shot>);
  static copyOf(source: Shot, mutator: (draft: MutableModel<Shot>) => MutableModel<Shot> | void): Shot;
}

export declare class Reel {
  readonly id: string;
  readonly collectionID: string;
  readonly Format: Format | keyof typeof Format;
  readonly Titl: string;
  readonly ShootLocation?: string;
  readonly ShootDate?: string;
  readonly ScanningFileNumber?: string;
  readonly BackupDriveName?: string;
  readonly ReelNotes?: string;
  readonly MediaUrl?: string;
  readonly Shots?: (Shot | null)[];
  constructor(init: ModelInit<Reel>);
  static copyOf(source: Reel, mutator: (draft: MutableModel<Reel>) => MutableModel<Reel> | void): Reel;
}

export declare class Person {
  readonly id: string;
  readonly collectionID: string;
  readonly RelationshipToCopyrightHolder?: RelationshipToCopyrightHolder | keyof typeof RelationshipToCopyrightHolder;
  readonly LastName: string;
  readonly FirstName: string;
  readonly Address: string;
  readonly City: string;
  readonly State: string;
  readonly ZipCode: string;
  readonly Country: string;
  readonly Phone: string;
  readonly ContactEmai: string;
  readonly PaypalEmail?: string;
  readonly Notes?: string;
  readonly ModelReleaseUrl?: string;
  readonly ImageUrl?: string;
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

export declare class Collection {
  readonly id: string;
  readonly Name: string;
  readonly CopyrightHolder: string;
  readonly CopyrightHolderStatus: CopyrightHolderStatus | keyof typeof CopyrightHolderStatus;
  readonly LicensingAgentOrContact?: string;
  readonly LicensingAgreementUrl?: string;
  readonly AdditionalNotes?: string;
  readonly Signatories?: (Person | null)[];
  readonly Reels?: (Reel | null)[];
  constructor(init: ModelInit<Collection>);
  static copyOf(source: Collection, mutator: (draft: MutableModel<Collection>) => MutableModel<Collection> | void): Collection;
}