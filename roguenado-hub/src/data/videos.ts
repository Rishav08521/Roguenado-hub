export interface Video {
  id: string;
  title: string;
  category: 'Disney' | 'Cartoon' | 'Trailer';
  prompt: string; // The "Secret Sauce" for your users
}

export const ROGUENADO_VIDEOS: Video[] = [
  {
    id: 'Your_YouTube_ID_1',
    title: 'AI Disney Pixar Style Adventure',
    category: 'Disney',
    prompt: 'A brave explorer in the style of 3D Disney animation, high detail, Pixar lighting...'
  },
  // Add your other videos here
];