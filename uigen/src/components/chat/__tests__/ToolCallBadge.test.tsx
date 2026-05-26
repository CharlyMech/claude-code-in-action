import { test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});
import { ToolCallBadge } from "../ToolCallBadge";

test("str_replace_editor create shows Creating filename", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "create", path: "src/components/Button.tsx" }}
      state="result"
    />
  );
  expect(screen.getByText("Creating Button.tsx")).toBeDefined();
});

test("str_replace_editor str_replace shows Editing filename", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "str_replace", path: "src/App.tsx" }}
      state="result"
    />
  );
  expect(screen.getByText("Editing App.tsx")).toBeDefined();
});

test("str_replace_editor insert shows Editing filename", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "insert", path: "src/index.tsx" }}
      state="result"
    />
  );
  expect(screen.getByText("Editing index.tsx")).toBeDefined();
});

test("str_replace_editor view shows Viewing filename", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "view", path: "src/styles.css" }}
      state="result"
    />
  );
  expect(screen.getByText("Viewing styles.css")).toBeDefined();
});

test("str_replace_editor undo_edit shows Undoing edit in filename", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "undo_edit", path: "src/components/Card.tsx" }}
      state="result"
    />
  );
  expect(screen.getByText("Undoing edit in Card.tsx")).toBeDefined();
});

test("file_manager rename shows Renaming filename", () => {
  render(
    <ToolCallBadge
      toolName="file_manager"
      args={{ command: "rename", path: "src/utils.ts" }}
      state="result"
    />
  );
  expect(screen.getByText("Renaming utils.ts")).toBeDefined();
});

test("file_manager delete shows Deleting filename", () => {
  render(
    <ToolCallBadge
      toolName="file_manager"
      args={{ command: "delete", path: "src/old.tsx" }}
      state="result"
    />
  );
  expect(screen.getByText("Deleting old.tsx")).toBeDefined();
});

test("unknown tool falls back to raw toolName", () => {
  render(
    <ToolCallBadge
      toolName="some_unknown_tool"
      args={{}}
      state="result"
    />
  );
  expect(screen.getByText("some_unknown_tool")).toBeDefined();
});

test("state result shows no spinner", () => {
  const { container } = render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "create", path: "Button.tsx" }}
      state="result"
    />
  );
  expect(container.querySelector(".animate-spin")).toBeNull();
});

test("state call shows spinner", () => {
  const { container } = render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "create", path: "Button.tsx" }}
      state="call"
    />
  );
  expect(container.querySelector(".animate-spin")).toBeDefined();
});

test("state partial-call shows spinner", () => {
  const { container } = render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "create", path: "Button.tsx" }}
      state="partial-call"
    />
  );
  expect(container.querySelector(".animate-spin")).toBeDefined();
});

test("path with nested dirs shows only basename", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "create", path: "src/components/ui/deep/Button.tsx" }}
      state="result"
    />
  );
  expect(screen.getByText("Creating Button.tsx")).toBeDefined();
});
