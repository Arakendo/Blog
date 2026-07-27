export const tagIds = [
  'boundaries',
  'capabilities',
  'canonical-representation',
  'composition',
  'corpus',
  'diagnostics',
  'epistemics',
  'evidence',
  'execution',
  'inspectability',
  'meaning',
  'ownership',
  'primitives',
  'provenance',
  'representation',
  'source-of-truth',
  'structural-guarantees',
  'trust',
  'validation',
] as const;

export type TagId = (typeof tagIds)[number];
