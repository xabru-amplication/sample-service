import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignerTo?: UserWhereUniqueInput | null;
  estimationDays?: string | null;
  project?: ProjectWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  testValue?: string | null;
  title?: string | null;
};
