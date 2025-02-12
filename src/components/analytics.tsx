import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { AnalyticsCard } from "./analytics-card";
import { DottedSeparator } from "./dotted-separator";

const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="w-full flex flex-row">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Total tasks"
            value={data.taskCount}
            variant={data.taskDiff > 0 ? "UP" : "DOWN"}
            increaseValue={data.taskDiff}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Assigned tasks"
            value={data.assignedTaskCount}
            variant={data.assignedTaskDiff > 0 ? "UP" : "DOWN"}
            increaseValue={data.assignedTaskDiff}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Completed tasks"
            value={data.completeTaskCount}
            variant={data.completeTaskDiff > 0 ? "UP" : "DOWN"}
            increaseValue={data.completeTaskDiff}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Overdue tasks"
            value={data.overdueTaskCount}
            variant={data.overdueTaskDiff > 0 ? "UP" : "DOWN"}
            increaseValue={data.overdueTaskDiff}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Incomplete tasks"
            value={data.incompleteTaskCount}
            variant={data.incompleteTaskDiff > 0 ? "UP" : "DOWN"}
            increaseValue={data.incompleteTaskDiff}
          />
        </div>
      </div>
      <ScrollBar orientation="horizontal"/>
    </ScrollArea>
  );
};

export default Analytics;
