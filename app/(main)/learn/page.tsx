import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/stickey-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/quaries";
import { redirect } from "next/navigation";

const LearnPage = async () => {

  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if(!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
