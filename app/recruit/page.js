import Curriculum from "@/components/Recruit/Curriculum";
import Tracks from "../../components/Recruit/Tracks";
import FAQ from "@/components/Recruit/FAQ";
import { Notice } from "../../components/Recruit/Notice";
export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center gap-[100px]">
      <Notice />
      <Tracks />
      <Curriculum />
      <FAQ />
    </main>
  );
}
