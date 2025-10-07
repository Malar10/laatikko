"use client"
import { useEffect, useRef } from 'react';
import mqtt from "mqtt"

export default function Home() {
  const client = useRef<mqtt.MqttClient>(null);
  useEffect(() => {
    client.current = mqtt.connect("mqtt://test.mosquitto.org");
  }, []);

  return (
    <main>
      <div>Next.js on GitHub Pages</div>
      <div>glup</div>
    <button onClick={() => client.current?.publish("epiclaatikko/1", "joo")}>nappulo</button>
    </main>
  );
}
