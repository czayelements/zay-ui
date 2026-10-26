import type { PropGroup } from "@/lib/types";

/** The API reference of one component: a table per part. */
export function PropsTable({ groups }: { groups: PropGroup[] }) {
  return (
    <>
      {groups.map((group, i) => (
        <div key={i}>
          {group.part ? <h3>{group.part}</h3> : null}
          <div className="dx-props">
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {group.rows.map((row) => (
                  <tr key={row.name}>
                    <td>
                      <code>{row.name}</code>
                    </td>
                    <td>
                      <code>{row.type}</code>
                    </td>
                    <td>{row.default ? <code>{row.default}</code> : "—"}</td>
                    <td>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}
