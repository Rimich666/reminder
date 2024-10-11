import {useSelector} from 'react-redux';

export default function Table() {
  const reminders = useSelector((state) => state.reminder.reminder);
  console.log(reminders);
  return (
    <main>
      <header className={'table_header'}></header>
      <section></section>
      <footer className={''}></footer>
      Main
    </main>
  )
}