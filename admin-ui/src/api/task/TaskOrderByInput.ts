import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignerToId?: SortOrder;
  createdAt?: SortOrder;
  estimationDays?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  testValue?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
