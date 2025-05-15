import React, { useStxate, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', role: 'admin' });

  useEffect(() => {
    fetch('http://192.168.0.10:5000/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://192.168.0.10:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const newUser = await res.json();
    setUsers([...users, newUser]);
    setForm({ name: '', email: '', role: 'admin' });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Usuarios</h2>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="Nombre"
          className="border p-2 w-full"
        />
        <input
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder="Correo electrónico"
          className="border p-2 w-full"
        />
        <select
          value={form.role}
          onChange={e => setForm({ ...form, role: e.target.value })}
          className="border p-2 w-full"
        >
          <option value="admin">Administración</option>
          <option value="editor">Editor</option>
        </select>
        <button type="submit" className="bg-green-500 text-white p-2 w-full">
          Agregar usuario
        </button>
      </form>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-2 border rounded">
            {user.name} - {user.email} ({user.role})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
key={user.id}
