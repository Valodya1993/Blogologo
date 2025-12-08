import { type FC, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext/theme-context";

interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
}

export const Tabs: FC = () => {
  const [active, setActive] = useState("articles");
  const { theme } = useTheme();

  const tabs: Tab[] = [
    { id: "articles", label: "Articles" },
    { id: "news", label: "News" },
  ];

  return (
    <Wrapper>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          $active={active === tab.id}
          disabled={tab.disabled}
          onClick={() => !tab.disabled && setActive(tab.id)}
          style={{
            color: theme.colors.text
        }}
        >
          {tab.label}
          {active === tab.id && !tab.disabled && <Line />}
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
  color: ${(p) => (p.disabled ? "#aaa" : p.$active ? "#000" : "#555")};
  background: none;
  border: none;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  
  &:hover {
    color: ${(p) => (!p.disabled && !p.$active ? "#6C1BDB" : "")}!important;
  }
`;

// линия под активным табом
const Line = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #000;
`;