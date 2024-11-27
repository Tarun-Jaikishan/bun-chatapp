import { twMerge } from "tailwind-merge";

type props = {
  className?: string;
};

export default function ContactPicker({ className = "" }: props) {
  return (
    <button type="button" className={twMerge("", className)}>
      ContactPicker
    </button>
  );
}
