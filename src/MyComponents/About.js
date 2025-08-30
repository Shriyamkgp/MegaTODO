import React from "react";

const About = () => {
  return (
    <div className="container my-4 text-start">
      <h2 className="mb-3 fs-2">About Mega Todos</h2>
      <p className="fs-6">
        Welcome to <strong>Mega Todos</strong> your simple and handy tool to
        stay on top of your tasks!
      </p>
      <p className="fs-6">
        This website is built with <strong>React</strong> to give you a smooth
        and fast experience while keeping things clean and easy to use.
      </p>

      <h4 className="mt-4 fs-4">Features:</h4>
      <ul className="fs-6">
        <li>
          <strong>Add Tasks:</strong> Quickly create new todos by adding a title
          and description.
        </li>
        <li>
          <strong>Organized List:</strong> All your todos are neatly listed in
          order, so you can see what’s next at a glance.
        </li>
        <li>
          <strong>Delete with One Click:</strong> Finished something? Just hit
          the delete button to remove it from your list.
        </li>
        <li>
          <strong>Minimal & Clean Design:</strong> A clutter-free interface that
          helps you focus only on your tasks.
        </li>
      </ul>

      <p className="mt-3 fs-6">
        <strong>Mega Todos</strong> is designed to make managing your day-to-day
        tasks effortless. Whether it’s a quick reminder, study goals, or gym
        schedule this app keeps you on track!
      </p>
    </div>
  );
};

export default About;
