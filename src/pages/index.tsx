import Calendar from "@/component/Calendar";

export default function HomePage() {
  return (
    <div>
      <Calendar
        // value={"2021-10-10"}
        onChange={() => {
          console.log("ss");
        }}
      ></Calendar>
    </div>
  );
}
