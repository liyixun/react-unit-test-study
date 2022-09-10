import { Tooltip, Card } from "antd";
import { useParams } from "react-router-dom";
import { CounterContextWrapper } from "../../context/counter-context";

interface TodoReportProp {
  title: string;
  extraMsg?: string;
  content: string;
}

function CardHeader(props: Pick<TodoReportProp, "title" | "extraMsg">) {
  const { title, extraMsg } = props;
  const { reportId } = useParams<{ reportId: string }>();
  return (
    <Tooltip title={extraMsg}>
      <span>{title}</span>
      <span>{`报告:${reportId}`}</span>
    </Tooltip>
  );
}

export default function TodoReport({ content, ...rest }: TodoReportProp) {
  return (
    <CounterContextWrapper>
      <Card title={<CardHeader {...rest} />} style={{ width: 400 }}>
        <span>{content}</span>
      </Card>
    </CounterContextWrapper>
  );
}
