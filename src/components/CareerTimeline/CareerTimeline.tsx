import { Text, Timeline } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CareerItemProps {
  title: string;
  institution: string;
  date: string;
  icon: any;
  description: string;
}

interface CareerTimelineProps {
  items: CareerItemProps[];
}

const CareerTimeline: React.FC<CareerTimelineProps> = ({ items }) => {
  return (
    <Timeline active={items.length - 2} bulletSize={34} lineWidth={6}>
      {items.map(({ title, institution, date, icon, description }, index) => (
        <Timeline.Item key={index} bullet={<FontAwesomeIcon icon={icon} size="sm" />} title={title}>
          <Text size="sm" c="dimmed">
            {institution && date ? `${institution} • ${date}` : institution || date}
          </Text>
          <Text size="sm" ta="justify">
            {description}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default CareerTimeline;
