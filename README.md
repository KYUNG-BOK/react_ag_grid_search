# 🔍 AG-Grid Quick Filter로 검색창 구현하기

프론트엔드 테이블 컴포넌트 중 가장 강력한 도구 중 하나인 **AG-Grid**.  
오늘은 그중에서도 **검색창 기능을 어떻게 구현할 수 있을까요?**

---

## 🔎 Quick Filter란?

AG-Grid에서 `quickFilterText` 속성을 활용하면 **모든 컬럼에 대해 부분 검색이 가능한 기능**을 아주 간단하게 구현할 수 있습니다.

> 사용자가 키워드를 입력하면, 각 셀의 값을 문자열로 연결한 뒤 `includes()`로 필터링합니다.

---

## ⚙️ 기본 사용법

```tsx
<AgGridReact
  rowData={barcodes}
  columnDefs={columnDefs}
  quickFilterText={quickFilterText}
/>

<input
  type="text"
  placeholder="검색어를 입력하세요"
  value={quickFilterText}
  onChange={(e) => setQuickFilterText(e.target.value)}
/>
```

---

## 🧠 작동 원리 요약

| 항목       | 설명                                                                 |
|------------|----------------------------------------------------------------------|
| 사용 목적   | 그리드 전체 데이터에 대해 텍스트 검색                                           |
| 작동 방식   | 모든 셀의 값을 하나의 문자열로 연결하고 `includes()`로 필터                         |
| 특징       | 대소문자 무시, 부분 일치 검색                                                 |
| 커스터마이징 | `gridApi.setQuickFilter()` 또는 `doesRowPassOtherFilter()` 등 활용 가능 |

---

## ✅ 장점

- 전 컬럼 검색을 한 번에!
- 빠른 반응성
- 커스텀 필터 없이도 간단 구현
- `pagination`, `sorting`과도 잘 작동

---

## ⚠️ 유의사항

- 숫자는 문자열로 처리됨 → `"10"` 검색 시 `10`만 매칭됨
- 숨겨진 컬럼은 검색되지 않음
- 검색 대상은 문자열 기준 (날짜, 숫자 포함)

---

## 📸 스크린샷
![gridag](https://github.com/user-attachments/assets/eba68688-5973-484a-8667-73541bdb05b2)


---

## 💡 꿀팁: `korean-regexp`와 함께 쓰기

한글 초성 검색도 추가로 필요하다면?  
[`korean-regexp`](https://www.npmjs.com/package/korean-regexp) 라이브러리와 함께 사용할 수 있습니다!

```tsx
import { getRegExp } from 'korean-regexp';

const reg = getRegExp('ㅎㄱ');
reg.test('한국'); // true
```

> 필요 시 `doesRowPassFilter()`를 오버라이드해서 커스터마이징도 가능합니다!

---

## 🎁 마무리

`quickFilterText`는 복잡한 로직 없이도  
**즉시 전체 테이블 필터링 기능을 제공할 수 있는 강력한 도구**입니다.

> 검색 기능이 고민되신다면, AG-Grid의 기본 기능부터 한번 써보세요.  
> 그리고 `korean-regexp` 등으로 확장하면 더욱 유용합니다 😊
