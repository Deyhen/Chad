export interface Step {
    label: string;
    isCompleted: boolean;
    route: string
  }
  
  export interface ProgressStepsProps {
    steps: Step[];
  }