import moment from "moment";

type props = {
  text: string;
  date: Date | string | number;
};

export default function ReceiverChat({ text, date }: props) {
  return (
    <div className="flex justify-start">
      <div className="bg-slate-200 max-w-[30rem] p-3 rounded-lg">
        <p>{text}</p>
        <div className="px-10">
          <hr className="border-white my-2" />
        </div>
        <div className="flex justify-end">
          <p className="text-xs text-slate-600">
            {moment(date).format("DD MMM YYYY, hh:mm a")}
          </p>
        </div>
      </div>
    </div>
  );
}
