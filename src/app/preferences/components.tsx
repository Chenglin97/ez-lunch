import type { ReactNode } from "react";

export function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-2xl border bg-white p-6 ${className}`.trim()}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function FieldLabel({ children }: { children: ReactNode }) {
  return <div className="text-sm font-medium text-zinc-900">{children}</div>;
}

export function HelpText({ children }: { children: ReactNode }) {
  return <div className="mt-1 text-xs text-zinc-500">{children}</div>;
}

export function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={
        "mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-900" +
        (className ? ` ${className}` : "")
      }
    />
  );
}

export function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  const { className, ...rest } = props;
  return (
    <textarea
      {...rest}
      className={
        "mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-900" +
        (className ? ` ${className}` : "")
      }
    />
  );
}

export function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border bg-white px-4 py-3">
      <span className="text-sm text-zinc-900">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5 accent-zinc-900"
      />
    </label>
  );
}
