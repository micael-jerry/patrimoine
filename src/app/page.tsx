import { CustomGraph } from "@/components/customs/CustomGraph";
import InputForm from "@/components/customs/InputForm";
import { Log } from "@/components/customs/Log";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">
        <div className="space-y-4">
          <div className="p-4 border-2 rounded-lg bg-white shadow-md">
            <InputForm />
          </div>
          <Log />
        </div>
        <div className="p-4 border-2 rounded-lg bg-white shadow-md">
          <h2 className="text-lg font-bold mb-4">Graphique</h2>
          <div className="h-full flex items-center justify-center">
            <CustomGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
