"use client";

type Props = {
    id: number;
    index: number;
    totalCount: number;
    locked?: boolean;
    current?: boolean;
    percentage: number;
  };

  export const LessonButton = ({
    id,
    index,
    totalCount,
    locked,
    current,
    percentage
  }: Props) => {
    return (
        <div>
            hi
        </div>
    )
  }