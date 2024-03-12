import Calendar from "@/component/Calendar";

export default function HomePage() {
  return (
    <div>
      <Calendar
        onChange={() => {
          console.log("ss");
        }}
      ></Calendar>
    </div>
  );
}
