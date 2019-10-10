export interface User {
  firstName?: string;
  lastName?: string;
  age?: number;
  address?: {
    street?: "12 first monoaliza";
    city?: "cairo";
    state?: "Egypt";
  };
  image?: string;
  about?: string;
  job?: string;
  coursesNumber?: number;
  workPointes?: number;
  certifications?: number;
  skills?: number;
  date?: {
    day?: number;
    month?: string;
    year?: number;
  };
}
