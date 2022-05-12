export function updatePanelPosition(instant?: boolean) {
  const baseEl = document.querySelector<HTMLDivElement>('.ratsel-tp');
  const baseRect = baseEl?.getBoundingClientRect();

  const updatePosition = () => {
    const panelEl = document.querySelector<HTMLDivElement & { style: any }>(
      '.ratsel-tp-panel',
    );
    if (panelEl) {
      panelEl.style.cssText = `
          width: ${baseRect?.width}px;
          top: ${baseRect?.top}px;
          left: ${baseRect?.left}px;
          display: block;
        `;
    }
  };
  if (instant) updatePosition();
  setTimeout(updatePosition, 0);
}
