export interface Resume {
  name: string;
  title: string;
  summary: string;
  experience: { company: string; role: string; period: string; details: string[] }[];
  education: { institution: string; degree: string; year: string }[];
  skills: string[];
}
