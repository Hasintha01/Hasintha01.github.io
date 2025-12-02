/**
 * Type declarations for individual lucide-react icon imports
 * This allows importing icons individually without TypeScript errors
 */

declare module 'lucide-react/dist/esm/icons/*' {
  import { LucideIcon } from 'lucide-react';
  const icon: LucideIcon;
  export default icon;
}
