export const postStatus = {
  공개: 0,
  보호: 1,
  비공개: 2,
} as const;

export type PostStatus = typeof postStatus;

export type PostStatusKeys = keyof typeof postStatus;

export type PostStatusValues = typeof postStatus[keyof typeof postStatus];
