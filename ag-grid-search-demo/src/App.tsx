import React, { useState, useMemo, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

interface Barcode {
  id: string;
  equipmentId: string;
  modulename: string;
  bomcode: string;
  partname: string;
  parts: number;
  date: string;
}

// 더미데이터 입니다.
const sampleData: Barcode[] = [
  {
    id: 'A001',
    equipmentId: 'E-001',
    modulename: 'Module A',
    bomcode: 'BOM001',
    partname: 'Part A',
    parts: 10,
    date: '2024-07-01',
  },
  {
    id: 'A002',
    equipmentId: 'Q-002',
    modulename: 'Module B',
    bomcode: 'BOM002',
    partname: 'Part B',
    parts: 5,
    date: '2024-07-02',
  },
];

const BarcodeSearchSample: React.FC = () => {
  const [quickFilterText, setQuickFilterText] = useState('');
  const gridRef = useRef<AgGridReact<Barcode>>(null);

  const columnDefs = useMemo<ColDef[]>(
    () => [
      { headerName: '작업번호', field: 'id' },
      { headerName: '설비명', field: 'equipmentId' },
      { headerName: '모듈명', field: 'modulename' },
      { headerName: 'BOM 코드', field: 'bomcode' },
      { headerName: '부품명', field: 'partname' },
      { headerName: '수량', field: 'parts' },
      { headerName: '등록일자', field: 'date' },
    ],
    []
  );

  return (
    <div style={{ padding: '20px' }}>
      <h3>🔍 AG-Grid Quick Filter 테스트 창 구현하기</h3>

      <input
        type="text"
        placeholder="원하는 검색어를 입력해주세요"
        value={quickFilterText}
        onChange={(e) => setQuickFilterText(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
      />

      <div className="ag-theme-alpine" style={{ height: 700, width: '100%' }}>
        <AgGridReact
          ref={gridRef}
          rowData={sampleData}
          columnDefs={columnDefs}
          quickFilterText={quickFilterText}
          defaultColDef={{ resizable: true, sortable: true, filter: true }}
        />
      </div>
    </div>
  );
};

export default BarcodeSearchSample;
