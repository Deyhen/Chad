export interface Step {
    route: string
    isCompleted: boolean;
  }
  
  export interface ProgressStepsProps {
    steps: Step[];
  }