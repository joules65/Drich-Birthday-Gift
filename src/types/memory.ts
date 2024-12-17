export interface Memory {
  id: number;
  mediaType: 'image' | 'video';
  media: string;
  song: string;
  caption: string;
  position: {
    x: number;
    y: number;
  };
}