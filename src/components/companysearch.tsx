import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

type Company = {
  id: number;
  name: string;
  type: string; // "配送", "材料", "販売", "製造"
};

const companyTypes = ["すべて", "配送", "材料", "販売", "製造"];

export default function CompanySearch({ companies }: { companies: Company[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("すべて");

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "すべて" || company.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex gap-2">
        {/* 検索バー */}
        <Input
          type="text"
          placeholder="会社名を検索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />

        {/* フィルター（ドロップダウン） */}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border p-2 rounded"
        >
          {companyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* 絞り込み結果のリスト */}
      <div className="mt-4 space-y-3">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <div key={company.id} className="flex items-center gap-4 border p-3 rounded-lg">
              <div className="rounded-full bg-blue-100 p-2">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{company.name}</p>
                <p className="text-xs text-muted-foreground">{company.type}</p>
              </div>
              <Button variant="ghost" size="sm">
                詳細
              </Button>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">該当する企業が見つかりません。</p>
        )}
      </div>
    </div>
  );
}
