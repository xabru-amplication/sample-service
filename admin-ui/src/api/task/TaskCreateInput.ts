import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  assignerTo?: UserWhereUniqueInput | null;
  estimationDays?: string | null;
  project?: ProjectWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
