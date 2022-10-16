import { User } from "../user/User";
import { Project } from "../project/Project";

export type Task = {
  assignerTo?: User | null;
  createdAt: Date;
  estimationDays: string | null;
  id: string;
  project?: Project | null;
  startDate: Date | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
