export default function CoreConcept({ image, title, description }) {
  return (
    <li className="w-40 text-center ">
      <img
        className="inline-block w-24 h-16 object-cover"
        src={image}
        alt={title}
      />
      <h3 className="my-2 font-bold">{title}</h3>
      <p className="text-sm text-center w-40">{description}</p>
    </li>
  );
}
