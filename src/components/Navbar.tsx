import NavItem from './NavItem';

interface Section {
  label: string;
  section: string;
}

const items: Section[] = [
  {
    label: 'About Me',
    section: 'aboutMe'
  },
  {
    label: 'Experience',
    section: 'experience'
  },
  {
    label: 'Projects',
    section: 'projects'
  }
];

const Navbar = () => {
  return (
    <div className="nav-header">
      {items.map(({label, section}, i) => (
        <NavItem
          label={label}
          section={section}
          order={items.length - 1 - i}
          key={i}
        />
      ))}
    </div>
  );
};

export default Navbar;
