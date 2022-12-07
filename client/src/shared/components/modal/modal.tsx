import React from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export const  Modal = (props) =>{
	const saveDialog = (props.saveDialog) ? props.saveDialog : () => { };
	const cancelDialog = (props.cancelDialog) ? props.cancelDialog : () => { };
	const titleSave = props.titleSave || 'Guardar';
	const dialogProps = {
		header: props.header,
		visible: props.visible,
		onHide: props.onHide,
		modal: props.modal,
		maximizable: props.maximizable,
		style: props.style
	};
	const renderFooter = () => {
		return (
			< >
				{!props.closer &&
					<>
						<Button
							label='Cancelar'
							icon='pi pi-times'
							onClick={() => cancelDialog()}
							className='p-button-text' />
						<Button
							label={titleSave}
							icon='pi pi-check'
							type='submit'
							form={props.form}
							onClick={() => saveDialog()}
							autoFocus />
					</>
				}
			</ >
		);
	};
	return (
		< >
			<Dialog
				{...dialogProps}
				footer={renderFooter}>
				{props.children}
			</Dialog>
		</>
	);
}
