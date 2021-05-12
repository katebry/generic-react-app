import styled from "styled-components";

export interface ProgressIndicatorProps {
  counterName?: string;
  currentPage: number;
  totalPages: number;
}

export const ProgressIndicator = ({
  counterName = "Step",
  currentPage,
  totalPages,
}: ProgressIndicatorProps) => {
  return (
    <>
      <h4 data-testid="progress-indicator">
        {counterName} {currentPage} of {totalPages}
      </h4>
    </>
  );
};
