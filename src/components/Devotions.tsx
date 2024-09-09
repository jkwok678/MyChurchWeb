import { Devotion, DevotionProps } from "./Devotion";
import { useEffect, useState } from "react";
import { useSupabase } from "../hooks/useSupabase";


export function Devotions() {
  const supabase = useSupabase();
  const [devotions, setDevotions] = useState<DevotionProps[]>([]);
  useEffect(() => {
    async function getDevotions() {
      const { data } = await supabase.from("Devotions").select("title,intro,devo");

      setDevotions(data as DevotionProps[]);
    }

    getDevotions();


  }, [supabase]);

  const listItems = devotions.map(item =>
    <div>
      <Devotion
        title={item.title}
        intro={item.intro}
        devo={item.devo}
      />
    </div>
  );

  return (
    <ul>{listItems}</ul>
  );
}
