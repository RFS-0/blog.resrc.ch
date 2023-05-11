export const DisplayVariant = {
  PreviewSmall: 'preview-small' as const,
  PreviewLarge: 'preview-large' as const,
  Full: 'full' as const,
};

export type DisplayVariant = typeof DisplayVariant[keyof typeof DisplayVariant];
