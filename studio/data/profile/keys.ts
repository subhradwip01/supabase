export const profileKeys = {
  profile: () => ['profile'] as const,
  auditLogs: ({
    date_start,
    date_end,
  }: {
    date_start: string | undefined
    date_end: string | undefined
  }) => ['profile', 'audit-logs', { date_start, date_end }] as const,
}
