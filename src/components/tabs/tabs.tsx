import { type FC } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext/theme-context";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  value: string;                // текущий таб
  onChange: (v: string) => void; // функция смены таба
}

export const Tabs: FC<TabsProps> = ({ value, onChange }) => {
  const { theme } = useTheme();

  const tabs: Tab[] = [
    { id: "articles", label: "Articles" },
    { id: "blogs", label: "Blogs" }
  ];

  return (
    <Wrapper >
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          $active={value === tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            color: theme.colors.text,
          }}
        >
          {tab.label}
          {value === tab.id && <Line style={{ background: theme.colors.text }} />}
        </Button>
      ))}
    </Wrapper>
  );
};

// контейнер
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

// кнопка
const Button = styled.button<{ $active?: boolean }>`
  position: relative;
  padding: 10px 20px;
  font-size: 16px;

  font-weight: ${(p) => (p.$active ? "600" : "400")};
  background: none;
  border: none;
  cursor: pointer;
  color: #555;

  &:hover {
    color: #6C1BDB !important;
  }
`;

// линия под активным табом
const Line = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
`;
