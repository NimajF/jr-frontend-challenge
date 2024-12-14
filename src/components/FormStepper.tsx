import { useState } from "react";

interface Step {
  number: number;
  title: string;
  details: string;
  isActive: boolean;
}

const steps: Step[] = [
  {
    number: 1,
    title: "User info",
    details: "Step details here",
    isActive: true,
  },
  {
    number: 2,
    title: "Company info",
    details: "Step details here",
    isActive: false,
  },
  {
    number: 3,
    title: "Payment info",
    details: "Step details here",
    isActive: false,
  },
];

const Stepper: React.FC = () => {
  const [active, setActive] = useState<Step[]>(steps);

  const handleActive = (number: number) => {
    const newSteps = [...steps];
    newSteps.forEach((step) => (step.isActive = step.number === number));
    setActive(newSteps);
  };
  return (
    <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
      {steps.map((step) => (
        <li
          key={step.number}
          className={`flex items-center ${
            step.isActive
              ? "text-blue-600 dark:text-blue-500"
              : "text-gray-500 dark:text-gray-400"
          } space-x-2.5 rtl:space-x-reverse`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
              step.isActive
                ? "border-blue-600 dark:border-blue-500"
                : "border-gray-500 dark:border-gray-400"
            }`}
          >
            {step.number}
          </span>
          <span>
            <h3 className="font-medium leading-tight">{step.title}</h3>
            <p className="text-sm">{step.details}</p>
          </span>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
