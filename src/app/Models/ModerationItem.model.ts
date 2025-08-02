export type ModerationStatus = 'pending' | 'approved' | 'rejected';

export class ModerationItem {
  constructor(
    public title: string,
    public content: string,
    public status: ModerationStatus,
    public image?: string | null
  ) {}
}
