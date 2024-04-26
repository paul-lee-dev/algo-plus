import { createRoot } from 'react-dom/client';
import { Modal } from '@/baekjoon/containers/Modal';
import React from 'react';
import { fetchCode } from '../apis/source';
import { ModalProps } from '@/baekjoon/types/source';

const customStatusPage = async () => {
    const table = document.querySelector('#status-table');
    if (!table) return;
    const tableHead = table.querySelector('thead');
    if (!tableHead) return;
    const tableBody = table.querySelector('tbody');
    if (!tableBody) return;

    const column = tableHead.querySelectorAll('tr');

    const headerCell = document.createElement('th');
    headerCell.textContent = '오답';
    headerCell.style.width = '5%';

    column[0].insertBefore(headerCell, column[0].firstChild);
    const rows = tableBody.querySelectorAll('tr');

    // 오답 체크박스
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('note-checkbox');
        checkboxCell.appendChild(checkbox);
        row.insertBefore(checkboxCell, row.firstChild);
    }

    // TODO: Checkbox 코드 선택 기능 추가
    const checkboxes = document.querySelectorAll('.note-checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            let checkedCount = 0;
            checkboxes.forEach((cb) => {
                let checked = cb as HTMLInputElement;
                if (checked.checked) {
                    checkedCount++;
                }
            });
            if (checkedCount > 2) {
                (checkbox as HTMLInputElement).checked = false;
            }
        });
    });

    const getSourceCode = async () => {
        const selectedRows = document.querySelectorAll(
            '.note-checkbox:checked'
        );
        const sourceCodeIds = getCheckedSubmissionNumbers();
        const sourceCodes = [];
        for (const id of sourceCodeIds) {
            const sourceCode = await fetchCode(id);
            sourceCodes.push(sourceCode);
            console.log('sourceCode: ', sourceCode);
        }
        return sourceCodes;
    };

    const getCheckedSubmissionNumbers = () => {
        const checkedSubmissionNumbers: number[] = [];
        const checkboxes = document.querySelectorAll('.note-checkbox:checked');
        checkboxes.forEach((checkbox) => {
            const row = checkbox.closest('tr');
            if (row) {
                const submissionNumber: number = row.querySelector(
                    'td:nth-child(2)'
                )?.textContent as unknown as number;
                checkedSubmissionNumbers.push(submissionNumber);
            }
        });
        return checkedSubmissionNumbers;
    };

    // 오답노트 작성 버튼
    const button = document.createElement('button');
    button.textContent = '오답 노트 작성';
    button.classList.add('btn', 'btn-primary');
    button.addEventListener('click', async () => {
        console.log('Clicked note btn');
        const modalDiv = document.createElement('div');
        modalDiv.className = 'modal-backdrop';
        document.body.appendChild(modalDiv);
        const root = createRoot(modalDiv);
        const sourceCodes = await getSourceCode();
        const checkedSubmissionNumbers = getCheckedSubmissionNumbers();
        console.log(
            '..................checkedSubmissionNumbers: ',
            checkedSubmissionNumbers
        );
        root.render(
            <React.StrictMode>
                <Modal sourceCodes={sourceCodes} />
            </React.StrictMode>
        );
    });

    // FIX: 오답 노트 작성 버튼 위치 고정해야함
    const anchor = document.querySelectorAll('.text-center');
    if (anchor) {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.appendChild(button);
        anchor[2].insertBefore(container, anchor[2].firstChild);
    }
};

export default customStatusPage;
